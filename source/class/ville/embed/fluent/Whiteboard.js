/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Whiteboard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m17.33 3.46.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 0 1-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 0 1 2.6-.1Zm-1.88.8L11.84 7.9a.9.9 0 0 0-.23.37l-.53 1.66 1.67-.5a.9.9 0 0 0 .38-.23l3.6-3.62a.93.93 0 0 0 .06-1.24l-.06-.06-.06-.06a.9.9 0 0 0-1.22.06ZM12.89 4H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7.13l-1 1V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.23c.57-.49 1.34-1.11 2.07-1.54.41-.23.78-.38 1.07-.43.28-.05.42 0 .5.1.08.07.1.13.11.18.01.06 0 .15-.04.27-.1.28-.3.6-.6 1.02l-.1.13c-.25.35-.53.74-.73 1.14-.22.45-.4 1-.2 1.56.17.5.5.84.92 1 .4.17.85.15 1.24.08a6.5 6.5 0 0 0 2.02-.81.5.5 0 0 0-.52-.86c-.4.24-1.07.58-1.68.69-.3.05-.53.04-.7-.02-.13-.06-.26-.16-.34-.4-.06-.19-.03-.43.15-.8.16-.31.4-.64.66-1l.1-.13c.27-.39.58-.83.73-1.27.08-.23.12-.5.08-.76a1.32 1.32 0 0 0-.39-.73c-.4-.4-.91-.46-1.38-.38-.46.08-.95.3-1.4.56-.54.31-1.1.72-1.57 1.1V7c0-1.1.9-2 2-2h6.9l1-1Z",
    FILLED : "m17.33 3.46.11.1.1.11c.64.76.61 1.9-.1 2.6l-3.6 3.63c-.22.22-.5.38-.8.47l-1.96.6a.84.84 0 0 1-1.04-1.08l.62-1.94c.1-.29.25-.55.47-.76l3.6-3.63a1.9 1.9 0 0 1 2.6-.1ZM12.9 4H4.5A2.5 2.5 0 0 0 2 6.5v2.26c.52-.48 1.12-.98 1.72-1.4A6.55 6.55 0 0 1 5.7 6.32c.32-.09.66-.12.99-.05.34.08.63.28.84.59.47.67.13 1.4-.2 1.92-.16.27-.37.56-.57.83l-.02.04c-.21.29-.42.58-.61.88-.16.28-.2.62-.13.86.03.12.1.2.17.27.07.06.19.12.37.13.33.03.76-.08 1.3-.27a.5.5 0 1 1 .33.94 4.2 4.2 0 0 1-1.71.33 1.52 1.52 0 0 1-1.41-1.12 2.19 2.19 0 0 1 .21-1.65h.01v-.01c.22-.34.45-.66.66-.95l.01-.02c.21-.29.4-.54.55-.78.32-.53.3-.73.22-.84a.4.4 0 0 0-.25-.17 1.08 1.08 0 0 0-.5.03c-.47.12-1.04.44-1.66.88-.85.6-1.7 1.38-2.3 1.98v3.35A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5V7.13l-3.45 3.47a2.9 2.9 0 0 1-1.22.73l-1.96.6A1.84 1.84 0 0 1 9.1 9.58l.62-1.94c.14-.44.38-.84.7-1.17L12.9 4Z"
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