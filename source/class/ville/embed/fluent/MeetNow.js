/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MeetNow",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M5 5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-1.03l2.84 1.85a.75.75 0 0 0 1.16-.63V6.8c0-.6-.66-.95-1.16-.63L13 8.03V7a2 2 0 0 0-2-2H5Zm8 4.22 3-1.95v5.46l-3-1.95V9.22ZM12 7v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1ZM6.9 2.03a7.07 7.07 0 0 0-1.15.54h-.02v.01L6 3l-.28-.42a.5.5 0 0 0 .56.84 1.87 1.87 0 0 1 .22-.13A8.1 8.1 0 0 1 10 2.5a8.1 8.1 0 0 1 3.5.79 3.69 3.69 0 0 1 .22.12l.26-.39-.26.4a.5.5 0 1 0 .56-.84L14 3l.28-.42h-.01l-.02-.01a2.83 2.83 0 0 0-.3-.17A9.1 9.1 0 0 0 10 1.5a9.1 9.1 0 0 0-3.1.53Zm-.62 1.39Zm7.44 0ZM6.9 17.97c.73.27 1.8.53 3.11.53a9.1 9.1 0 0 0 3.96-.9 4.63 4.63 0 0 0 .29-.17h.02v-.01L14 17l.28.42a.5.5 0 0 0-.56-.84l.26.4-.26-.4a1.74 1.74 0 0 1-.22.13 8.1 8.1 0 0 1-3.5.79 8.1 8.1 0 0 1-3.5-.79 3.66 3.66 0 0 1-.22-.12.5.5 0 0 0-.56.83L6 17l-.28.42h.01l.02.01a2.64 2.64 0 0 0 .3.17c.19.1.48.24.84.37Zm-.61-1.39Zm7.44 0Z";
   var pathdfilled = "M6.9 2.03a7.07 7.07 0 0 0-1.15.54h-.02v.01L6 3l-.28-.42a.5.5 0 0 0 .56.84 1.87 1.87 0 0 1 .22-.13A8.1 8.1 0 0 1 10 2.5a8.1 8.1 0 0 1 3.5.79 3.69 3.69 0 0 1 .22.12l.26-.39-.26.4a.5.5 0 1 0 .56-.84L14 3l.28-.42h-.01l-.02-.01a2.83 2.83 0 0 0-.3-.17A9.1 9.1 0 0 0 10 1.5a9.1 9.1 0 0 0-3.1.53Zm-.62 1.39Zm7.44 0ZM6.9 17.97c.73.27 1.8.53 3.11.53a9.1 9.1 0 0 0 3.96-.9 4.63 4.63 0 0 0 .29-.17h.02v-.01L14 17l.28.42a.5.5 0 0 0-.56-.84l.26.4-.26-.4a1.74 1.74 0 0 1-.22.13 8.1 8.1 0 0 1-3.5.79 8.1 8.1 0 0 1-3.5-.79 3.66 3.66 0 0 1-.22-.12.5.5 0 0 0-.56.83L6 17l-.28.42h.01l.02.01a2.64 2.64 0 0 0 .3.17c.19.1.48.24.84.37Zm-.61-1.39Zm7.44 0ZM2.5 7v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Zm11 4.55 2.78 2.26a.75.75 0 0 0 1.22-.59V6.78a.75.75 0 0 0-1.22-.59L13.5 8.45v3.1Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});