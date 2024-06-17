/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleCall",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0 4.25a2 2 0 0 0-2 2V12.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 15.09 4.24 16 6.75 16c2.51 0 3.87-.92 4.57-1.93a3.95 3.95 0 0 0 .68-1.99V12a2 2 0 0 0-2-2H3.5Zm-1 2.06V12a1 1 0 0 1 1-1H10a1 1 0 0 1 1 1v.16l-.06.33c-.07.27-.2.64-.45 1C10.01 14.2 9 15 6.75 15s-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm3.58 5.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z",
    FILLED : "M6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2V12.08a1.43 1.43 0 0 1-.01.18 3.95 3.95 0 0 1-.67 1.8C10.62 15.09 9.26 16 6.75 16c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12Zm13-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm1.08 7.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"
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