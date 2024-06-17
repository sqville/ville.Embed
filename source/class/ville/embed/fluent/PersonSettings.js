/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSettings",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm6.64 2.92a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
    FILLED : "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm6.64 2.92a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm4.86.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
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