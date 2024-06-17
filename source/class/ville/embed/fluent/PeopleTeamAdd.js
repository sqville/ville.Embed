/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleTeamAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 15h.1c.07.34.17.66.3.97A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 0 0-.25.25V13c0 1.1.9 2 2 2Zm8.97-6c-.11-.57-.62-1-1.22-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 4.25 4 5.51 5.51 0 0 1-.66-1.03A3 3 0 0 1 7 14V9.25c0-.14.11-.25.25-.25h6.72ZM15 9h1.76c.14 0 .25.11.25.25v.35c.36.18.7.4 1 .66V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1Zm-.49 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z",
    FILLED : "M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.61 0 1.12.44 1.23 1.02A5.5 5.5 0 0 0 10.25 18L10 18a4 4 0 0 1-4-4V9.25Zm8.99-.23c1.14.1 2.18.55 3.01 1.24V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.65.37 1.02ZM5 9.25c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25Zm14 5.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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