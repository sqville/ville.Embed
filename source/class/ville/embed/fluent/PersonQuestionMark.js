/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonQuestionMark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm10.5 8a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm.62-2a.62.62 0 1 0-1.24 0 .62.62 0 0 0 1.24 0Zm1.23-3.55c0-1.1-.82-1.95-1.85-1.95-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32Z",
    FILLED : "M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm.62-2a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0Zm1.23-3.55c0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0c-.01-1.13.8-1.95 1.85-1.95 1.03 0 1.85.85 1.85 1.95ZM9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});